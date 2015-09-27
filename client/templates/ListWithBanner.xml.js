/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A list template shows a list of items on the right, such as movies or TV shows. Focus on one to see its related content on the left, such as its artwork or description.

This variation of the list templates uses a banner element to display a large image at the top of the page.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <listTemplate>
    <list>
      <header>
        <title id="page_title">Title</title>
      </header>
      <section>
        <header>
          <title>Git Trend Repository</title>
        </header>
        <listItemLockup>
          <title >Title 1</title>
          <decorationLabel>4:41</decorationLabel>
          <relatedContent>
            <lockup>
              <img src="" width="50" height="50" />
              <title id="show_title">Related Title 1</title>
              <subtitle>Related Subtitle 1</subtitle>
              <description>Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis f
    elis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
