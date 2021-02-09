import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {createClient, Entry, LocaleCollection, EntryCollection } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
    environment: 'master'
  });

  private previewClient = createClient({
    space: environment.contentfulPreview.spaceId,
    accessToken: environment.contentfulPreview.token,
    host: 'preview.contentful.com',
    environment: 'master'
  });

  getLocales(isPreiew: string): Promise<LocaleCollection> {
    if(isPreiew) {
      this.client = this.previewClient;
    }
    return this.client.getLocales()
      .then(res => res);
  }

  getEntries(content_type: string, locale: string, slug: string): Promise<EntryCollection<any>> {
    return this.client.getEntries({
      content_type: content_type,
      locale: locale,
      'fields.slug': slug,
      include: 10
    }).then(data => data);
  }

  constructor() { }
}
