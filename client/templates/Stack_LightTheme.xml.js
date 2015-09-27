/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products. The user can navigate through the rows and products to focus on one.

This version of the stack template uses the light theme to automatically adjust text color to display properly on a light background. It also uses an alternate version of the banner element to display a small image at the top of the page with text and actionable buttons.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .lightBackgroundColor {
        background-color: #e49c36;
      }
    </style>
  </head>
  <stackTemplate theme="light" class="lightBackgroundColor" >
    <identityBanner>
      <heroImg src="${this.BASEURL}resources/images/trendlogo/github.png" width="300" height="200" />
      <title>Github Trend ShowCase</title>
      <subtitle>Recently github trend repository on "https://github.com/trending" </subtitle>
      <!--
      <row>
        <buttonLockup>
          <badge src="resource://button-rate" />
          <title>Trend</title>
        </buttonLockup>
        <buttonLockup>
          <badge src="resource://button-more" />
          <title>Support</title>
        </buttonLockup>
      </row>
    -->
    
    </identityBanner>
    <collectionList>
      <shelf>
        <header>
          <title>Trends</title>
        </header>
        <section>
          <lockup attr="actionscript">
            <img src="${this.BASEURL}resources/images/trendlogo/actionscript.jpeg" width="300" height="300" />
            <title>ActionScript</title>
          </lockup>
          <lockup attr="c">
            <img src="${this.BASEURL}resources/images/trendlogo/c.jpeg" width="300" height="300" />
            <title>C</title>
          </lockup>
          <!--
          <lockup attr="c#">
            <img src="${this.BASEURL}resources/images/trendlogo/c_.png" width="300" height="300" />
            <title>C#</title>
          </lockup>
    -->
          <lockup attr="cobol">
            <img src="${this.BASEURL}resources/images/trendlogo/cobol.png" width="300" height="300" />
            <title>COBOL</title>
          </lockup>
          <lockup attr="elixir">
            <img src="${this.BASEURL}resources/images/trendlogo/elixir.jpeg" width="300" height="300" />
            <title>elixir</title>
          </lockup>
          <lockup attr="go">
            <img src="${this.BASEURL}resources/images/trendlogo/go.png" width="300" height="300" />
            <title>Go</title>
          </lockup>
          <lockup attr="haskell">
            <img src="${this.BASEURL}resources/images/trendlogo/haskell.png" width="300" height="300" />
            <title>HASKELL</title>
          </lockup>
          <lockup attr="java">
            <img src="${this.BASEURL}resources/images/trendlogo/java.png" width="300" height="300" />
            <title>Java</title>
          </lockup>
          <lockup attr="javascript">
            <img src="${this.BASEURL}resources/images/trendlogo/javascript.png" width="300" height="300" />
            <title>javascript</title>
          </lockup>
    <!--
          <lockup attr="objective-c">
            <img src="${this.BASEURL}resources/images/trendlogo/objective-c.jpeg" width="300" height="300" />
            <title>objective-C</title>
          </lockup>
    -->
          <lockup attr="perl">
            <img src="${this.BASEURL}resources/images/trendlogo/perl.jpg" width="300" height="300" />
            <title>Perl</title>
          </lockup>
          <lockup attr="php">
            <img src="${this.BASEURL}resources/images/trendlogo/php.png" width="300" height="300" />
            <title>php</title>
          </lockup>
          <lockup attr="python">
            <img src="${this.BASEURL}resources/images/trendlogo/python.png" width="300" height="300" />
            <title>python</title>
          </lockup>
          <lockup attr="ruby">
            <img src="${this.BASEURL}resources/images/trendlogo/ruby.jpeg" width="300" height="300" />
            <title>Ruby</title>
          </lockup>
          <lockup attr="scala">
            <img src="${this.BASEURL}resources/images/trendlogo/scala.png" width="300" height="300" />
            <title>scala</title>
          </lockup>
          <lockup attr="swift">
            <img src="${this.BASEURL}resources/images/trendlogo/swift.png" width="300" height="300" />
            <title>swift</title>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
