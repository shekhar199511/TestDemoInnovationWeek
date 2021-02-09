import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Router, ActivatedRoute } from '@angular/router';

const TEST_IMAGE_URL = "";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsByLocale = {};
  locales = [];
  currentLocale = undefined;
  defaultLocale = undefined;
  defaultImageURL = undefined;

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const isPreview = this.route.snapshot.paramMap.get('preview');
    this.contentfulService.getLocales(isPreview).then(data => {
      const localeCodes = data.items.map( (localeData) => localeData.code );
      const defaultLocale = data.items.filter( (item) => item.default === true )[0].code;
      console.log("In on init: ",localeCodes);
      let productsByLocale = {};
      localeCodes.map((localeCode)=>{
        this.contentfulService.getEntries('landingPage', localeCode, 'b-resort')
          .then(data => {
            productsByLocale[localeCode] = data.items[0];
            if(localeCodes.indexOf(localeCode) == localeCodes.length - 1){
              this.productsByLocale = productsByLocale;
              this.locales = localeCodes;
              this.currentLocale = defaultLocale;
              this.defaultLocale = defaultLocale;
              this.defaultImageURL = TEST_IMAGE_URL;
            }
          })
      })
    })
  }

  handleSelectLocale(selectedCode: string) {
    this.currentLocale = selectedCode;
  }

}
