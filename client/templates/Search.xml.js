/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A search template lets users search your content and view found results. It includes a search field, a keyboard, and a list of results.
*/
var Template = function() {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
        .suggestionListLayout {
          margin: -150 0;
        }
      </style>
    </head>
    <searchTemplate>
      <searchField/>
      <collectionList>
        <list class="suggestionListLayout">
          <section>
            <header>
              <title>Suggestions</title>
            </header>
            <listItemLockup _value="grid">
              <title>"arc"</title>
            </listItemLockup>
            <listItemLockup>
              <title>arcade</title>
            </listItemLockup>
          </section>
        </list>
        <separator></separator>
        <shelf>
          <header>
            <title>Shelf Title</title>
          </header>
          <section>
            <lockup>
              <img src="${this.BASEURL}resources/images/movies/movie_1.lcr" width="350" height="520" />
              <title>Title 1</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/movies/movie_2.lcr" width="350" height="520" />
              <title>Title 2</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/movies/movie_3.lcr" width="350" height="520" />
              <title>Title 3</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/movies/movie_4.lcr" width="350" height="520" />
              <title>Title 4</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/movies/movie_5.lcr" width="350" height="520" />
              <title>Title 5</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/movies/movie_6.lcr" width="350" height="520" />
              <title>Title 6</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/movies/movie_7.lcr" width="350" height="520" />
              <title>Title 7</title>
            </lockup>
          </section>
        </shelf>
        <grid>
          <header>
            <title>Grid Title</title>
          </header>
          <section>
            <lockup>
              <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="350" height="350" />
              <title>Title 1</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="350" height="350" />
              <title>Title 2</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="350" height="350" />
              <title>Title 3</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/music/music_4.lcr" width="350" height="350" />
              <title>Title 4</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/music/music_5.lcr" width="350" height="350" />
              <title>Title 5</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/music/music_6.lcr" width="350" height="350" />
              <title>Title 6</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}resources/images/music/music_7.lcr" width="350" height="350" />
              <title>Title 7</title>
            </lockup>
          </section>
        </grid>
      </collectionList>
    </searchTemplate>
  </document>`
}
