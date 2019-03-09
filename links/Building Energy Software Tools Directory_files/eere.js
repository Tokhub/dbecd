//EERE Google Analytics Tracking Code
//(for version number and date search in code below for 'version')
// Requires JavaScript 5, IE 8 support dropped.

"use strict";
var GATrackerObject = {
  globalRollupID: "UA-24103967-1", //EERE total rollup ID
  version: "3.0.0 (Sep 2018)",
  enableGRTracking: true,
  profileID: "-",
  dataSource: "",
  siteSpecificTracker: new Object(),
  globalRollupTracker: new Object(),
  cookieDomain: document.location.hostname,
  grCookieDomain: "",
  jQueryTrackingID: "UA-24103967-2",
  crossSiteDomains: ["energy.gov", "annualmeritreview.energy.gov", "eereblogs.energy.gov", "www.afdc.energy.gov", "www.energycodes.gov", "www.energyempowers.gov", "www.solardecathlon.gov", "eeremultimedia.energy.gov", "federalfleets.energy.gov", "solarhighpen.energy.gov", "basc.pnnl.gov", "bbnp.pnnl.gov", "betterbuildingssolutioncenter.energy.gov", "waveenergyprize.org","nrel.github.io"],
  downloadFileExtensions: ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "zip", "exe", "epub", "dat", "mobi", "wvx", "wax", "asf", "asx", "wma", "mp4", "mp3", "m3u", "mpg", "swf", "avi", "wmv", "mov", "dmg", "jpg"],
  dataSources: {
    "Bioenergy": {  //This must match the datasource name below in the sites list
      id: "UA-25110701-1",  //This is the Google Analytics profile ID
      title: "EERE Bioenergy"   //This is simply descriptive, and can be set to anything
    },
    "BetterBuildings": {
      id: "UA-55403375-1",
      title: "EERE Better Buildings"
    },
    "Buildings": {
      id: "UA-25064180-1",
      title: "EERE Buildings"
    },
    "FEMP": {
      id: "UA-25108260-1",
      title: "EERE FEMP"
    },
    "FEMP-Sustainability": {
      id: "UA-25108260-2",
      title: "Sustainability Performance Office"
    },
    "FCT": {
      id: "UA-25108261-1",
      title: "EERE Fuel Cells"
    },
    "FCT-AnnualMeritReview": {
      id: "UA-25108261-2",
      title: "Annual Merit Review"
    },
    "Geothermal": {
      id: "UA-25109423-1",
      title: "EERE Geothermal"
    },
    "Manufacturing": {
      id: "UA-25110219-1",
      title: "EERE Manufacturing"
    },
    "Solar": {
      id: "UA-25110720-1",
      title: "EERE Solar"
    },
    "Vehicles": {
      id: "UA-25110724-1",
      title: "EERE Vehicles"
    },
    "Weatherization": {
      id: "UA-25108667-1",
      title: "EERE Weatherization"
    },
    "Wind-and-Water": {
      id: "UA-25109557-1",
      title: "EERE Wind & Water"
    },
    "Energy Savers": {
      id: "UA-25066145-1",
      title: "Energy Savers"
    },
    "Solar Decathlon": {
      id: "UA-24144971-1",
      title: "Solar Decathlon"
    },
    "DOE Hydrogen": {
      id: "UA-25066918-1",
      title: "DOE Hydrogen"
    },
    "Corporate": {
      id: "UA-25108607-1",
      title: "EERE Corporate"
    },
    "Corporate DEV": {
      id: "UA-25108607-5",
      title: "EERE Corporate DEV"
    },
    "Corporate-Intranet": {
      id: "UA-25108607-2",
      title: "EERE Intranet"
    },
    "Corporate-Grid Workshop": {
      id: "UA-25108607-3",
      title: "DOE Grid Integration Workshop"
    },
    "TEST" : {
      id : "UA-52836309-1",
      title : "EERE TEST"
    },
    "Wave Energy Prize": {
      id: "UA-58830142-1",
      title: "Wave Energy Prize"
    },
    "Wind Vision": {
      id: "UA-65221038-1",
      title: "Wind Vision"
    },

  },
  sites: [

    ["(www\.)?energy\.gov/eere/wind/maps/wind-vision", "Wind Vision", "", true],
    ["(www\.)?energy\.gov/eere/eveverywhere", "Vehicles", "", true],
    ["www(1|3)?\.eere\.energy\.gov/bioenergy/", "Bioenergy", "", true],
    ["www\.eereblogs\.energy\.gov/bioenergy/", "Bioenergy", "", true],
    ["www1\.eere\.energy\.gov/buildings/betterbuildings/", "BetterBuildings", "", true],
    ["www4\.eere\.energy\.gov/(workforce|alliance|challenge)/", "BetterBuildings", "", true],
    ["(www|apps)(1|4)?\.eere\.energy\.gov/buildings/", "Buildings", "", true],
    ["www\.eereblogs\.energy\.gov/buildingenvelope/", "Buildings", "", true],
    ["www\.energycodes\.gov/", "Buildings", "", true],
    ["(basc|bbnp)\.pnnl\.gov/", "Buildings", "", true],
    ["betterbuildingssolutioncenter\.energy\.gov", "BetterBuildings", "", true],
    ["rpsc\.energy\.gov/", "BetterBuildings", "", true],
    ["www5\.eere\.energy\.gov/office_eere/(current\_budget|program\_budget\_formulation)", "Corporate", "", true],
    ["(www|apps)(1|3|4)?\.eere\.energy\.gov/femp/", "FEMP", "", true],
    ["federalfleets\.energy\.gov/", "FEMP", "Fleet", true],
    ["epact\.energy\.gov", "Vehicles", "", true],
    ["energy\.gov/eere/spo/", "FEMP-Sustainability", "", true],
    ["www1?\.eere\.energy\.gov/team/", "FEMP-Team", "", true],
    ["www1?\.eere\.energy\.gov/hydrogenandfuelcells/", "FCT", "", true],
    ["www1?\.annualmeritreview\.energy\.gov/", "FCT-AnnualMeritReview", "", true],
    ["www(1|4)?\.eere\.energy\.gov/geothermal/", "Geothermal", "", true],
    ["(www|apps)(1|4)?\.eere\.energy\.gov/(manufacturing|industry|inventions)/", "Manufacturing", "", true],
    ["solarhighpen\.energy\.gov", "Solar", "", true],
    ["www\.afdc\.energy\.gov/cleancities", "Vehicles", "", true],
    ["www\.afdc\.energy\.gov/workplace-charging/", "Vehicles", "", true],
    ["(www|apps)(1|4)?\.eere\.energy\.gov/(wip|repi|tribalenergy|weatherization|state_energy_program)/", "Weatherization", "", true],
    ["(www|apps)1?\.eere\.energy\.gov/windandhydro/", "Wind-and-Water", "", true],
    ["(www|apps)(1|4|2)?\.eere\.energy\.gov/(wind|water)/", "Wind-and-Water", "", true],
    ["energy\.gov/energysaver/", "Energy Savers", "", false],
    ["(www\.)?energysavers\.gov/", "Energy Savers", "", false],
    ["www\.solardecathlon\.gov/", "Solar Decathlon", "", true],
    ["www\.hydrogen\.energy\.gov/", "DOE Hydrogen", "", false],
    ["eere-intranet2\.ee\.doe\.gov/", "Corporate-Intranet", "EERE Intranet", false],
    ["apps1\.eere\.energy\.gov/grid_integration_workshop/", "Corporate-Grid Workshop", "DOE Grid Integration Workshop", false],
    ["www1?\.eere\.energy\.gov/analysis/", "Corporate", "Energy Analysis", true],
    ["(www\.)?energy\.gov/eere/analysis/program-evaluation", "Corporate", "Energy Analysis", true],
    ["(www\.)?energy\.gov/eere/about-us/policy-and-analysis-team", "Corporate", "Energy Analysis", true],
    ["www4?\.eere\.energy\.gov/workforce/", "Corporate", "Better Buildings Workforce", true],
    ["(www\.)?biomassboard\.gov/", "Corporate", "Biomass Board", false],
    ["www1?\.eere\.energy\.gov/ba/pba/", "Corporate", "Planning, Budget, and Analysis", true],
    ["www1?\.eere\.energy\.gov/ba/", "Corporate", "Business Administration", true],
    ["www1?\.eere\.energy\.gov/communicationstandards/", "Corporate", "Communication Standards", true],
    ["(www|apps)1?\.eere\.energy\.gov/deployment/", "Corporate", "Deployment", true],
    ["www4?\.eere\.energy\.gov/disastercenter/", "Corporate", "Disaster and Energy Information", true],
    ["www5\.eere\.energy\.gov/eereatwork/", "Corporate", "EERE at Work", true],
    ["www1?\.eere\.energy\.gov/calculators/", "Corporate", "Energy Calculators", true],
    ["www1?\.eere\.energy\.gov/education/postdoctoral/", "Corporate", "Energy Education Postdoctoral Research Awards", true],
    ["www1?\.eere\.energy\.gov/education/lessonplans/", "Corporate", "Energy Education K12 Lesson Plans and Activities", true],
    ["www\.energyempowers\.gov/", "Corporate", "Energy Empowers", true],
    ["techportal\.eere\.energy\.gov/", "Corporate", "Energy Innovation Portal", true],
    ["(www\.)?energy\.gov/eere/funding/funding-opportunities", "Corporate", "Financial Opportunities", true],
    ["www4\.eere\.energy\.gov/fundingportal/", "Corporate", "Funding Portals", true],
    ["www4\.eere\.energy\.gov/svip/apply/", "Corporate", "About Us", true],
    ["apps3\.eere\.energy\.gov/greenpower/", "Corporate", "Green Power", true],
    ["www1?\.eere\.energy\.gov/informationcenter/", "Corporate", "Information Center", true],
    ["www1?\.eere\.energy\.gov/international/", "Corporate", "International Activities", true],
    ["www1?\.eere\.energy\.gov/kids/", "Corporate", "Kids", true],
    ["www1?\.eere\.energy\.gov/multimedia/", "Corporate", "Multimedia", true],
    ["apps1\.eere\.energy\.gov/news/", "Corporate", "News", true],
    ["www1?\.eere\.energy\.gov/office_eere/", "Corporate", "Office of EERE", true],
    ["www1?\.eere\.energy\.gov/fieldoperations/", "Corporate", "Office of Field Operations", true],
    ["www1?\.eere\.energy\.gov/pir/", "Corporate", "Program Plans, Implementation, and Results", true],
    ["www1?\.eere\.energy\.gov/library/", "Corporate", "Publication and Product Library", true],
    ["www1?\.eere\.energy\.gov/socialmedia/", "Corporate", "Social Media", true],
    ["apps1\.eere\.energy\.gov/states/", "Corporate", "State Activities and Partnerships", true],
    ["www4?\.eere\.energy\.gov/seeaction/", "Corporate", "State and Local Energy Efficiency Action Network", true],
    ["apps1\.eere\.energy\.gov/sled/", "Corporate", "State and Local Energy Data", true],
    ["(www\.)?energy\.gov/eere/success-stories/", "Corporate", "EERE Success Stories", true],
    ["apps1\.eere\.energy\.gov/survey/", "Corporate", "Survey", true],
    ["www1?\.eere\.energy\.gov/topics/", "Corporate", "Topic Landing Pages", true],
    ["www\.eere\.energy\.gov/(index\.html)?", "Corporate", "Home Page", true],
    ["(www\.)?energy\.gov/eere/bioenergy", "Bioenergy", "", true],
    ["(www\.)?energy\.gov/eere/buildings", "Buildings", "", true],
    ["(www\.)?energy\.gov/eere/better-buildings-neighborhood-program", "BetterBuildings", "", true],
    ["(www\.)?energy\.gov/eere/better-buildings-residential-network", "BetterBuildings", "", true],
    ["(www\.)?energy\.gov/eere/ssl", "Buildings", "", true],
    ["(www\.)?energy\.gov/eere/fuelcells", "FCT", "", true],
    ["(www\.)?energy\.gov/eere/femp", "FEMP", "", true],
    ["(www\.)?energy\.gov/eere/geothermal", "Geothermal", "", true],
    ["(www\.)?energy\.gov/eere/forge", "Geothermal", "", true],
    ["(www\.)?energy\.gov/eere/amo", "Manufacturing", "", true],
    ["(www\.)?energy\.gov/eere/sunshot", "Solar", "", true],
    ["(www\.)?energy\.gov/eere/solar", "Solar", "", true],
    ["(www\.)?energy\.gov/eere/solarpoweringamerica", "Solar", "", true],
    ["(www\.)?energy\.gov/eere/vehicles", "Vehicles", "", true],
    ["(www\.)?energy\.gov/eere/(wipo|slsc)", "Weatherization", "", true],
    ["(www\.)?energy\.gov/eere/wind", "Wind-and-Water", "", true],
    ["(www\.)?energy\.gov/eere/water", "Wind-and-Water", "", true],
    ["(www\.)?energy\.gov/eere/collegiatewindcompetition", "Wind-and-Water", "", true],
    ["(www\.)?energy\.gov/eere/cemi", "Corporate", "Clean Energy Manufacturing Initiative", true],
    ["(www\.)?energy\.gov/eere/education", "Corporate", "Energy Education and Workforce Development", true],
    ["(www\.)?energy\.gov/eere/", "Corporate", "EERE Pages on energy.gov", true],
    ["dev\.cms\.doe\.gov", "Corporate DEV", "DEV - EERE Pages on energy.gov", false],
    ["stage\.cms\.doe\.gov", "Corporate DEV", "DEV - EERE Pages on energy.gov", false],
    ["commdev2\.nrel\.gov/drrl/", "TEST", "Disaster Recovery & Energy Information Center", false],
    ["eeredev\.nrel\.gov/islandsplaybook", "TEST", "", false],
    ["apps1\.eere\.energy\.gov/islandsplaybook", "Corporate", "ETI Islands Playbook", true],
    ["waveenergyprize\.org", "Wave Energy Prize", "", true],
    ["(www\.)?energy\.gov/eere/wind/maps/wind-vision", "Wind Vision", "", true],

  ],
  //method to set GA IDs
  setIDs: function () {
    var pageURL = document.location.href;
    this.cookieDomain = document.location.hostname;
    this.grCookieDomain = (this.cookieDomain.split(".").length > 2) ? this.cookieDomain.substr(this.cookieDomain.indexOf(".")) : "." + this.cookieDomain;
    for (var i = 0; i < this.sites.length; i++) {
      var pattern = new RegExp("^http(s)?://" + this.sites[i][0] + ".*$");
      if (pattern.test(pageURL)) {
        this.dataSource = this.sites[i][1];
        this.profileID = this.dataSources[this.dataSource].id;
        if (!this.sites[i][3]) {
          this.enableGRTracking = false;
        }
        return;
      }
    }
  },
  listenToOnsiteSearch: function () {
    var searchInputs = document.querySelectorAll('input[name*="search"]')
    searchInputs.forEach(function (ele) {
      ele.addEventListener("change", GATrackerObject.trackOnsiteSearchEvent);
    });
  },
  trackOnsiteSearchEvent: function(evt){
    GATrackerObject.trackEvent("Onsite Search", "Results Unknown", this.value);
  },

  addEventHandlerToAllLinks: function() {
    var pageLinks = document.links;
    for (var i = 0; i < pageLinks.length; i++) {
      pageLinks[i].addEventListener("mouseup", this.trackLink);
    }
  },
  //This method reports the appropriate analytics event for any given link (download, cross-site, etc.)
  trackLink: function (evt) {
    if (this.href.indexOf("//") > -1) {
      var linkURL = this.href.toLowerCase();
      var linkURLChunks = linkURL.split("//")[1].split("/");
      var linkURLHost = linkURLChunks[0];
      var linkWithoutProtocol = linkURLChunks.join('/');

      
      var fileName = linkURLChunks[linkURLChunks.length - 1].split("?")[0].split("#")[0];
      if (fileName.length > 0 && fileName.indexOf(".") > 1) {
        var fileExtension = fileName.split(".").reverse()[0];
        for (var n = 0; n < GATrackerObject.downloadFileExtensions.length; n++) {
          if (fileExtension === GATrackerObject.downloadFileExtensions[n]) {
            
            GATrackerObject.trackEvent(fileExtension, fileName, linkURL);
            return;
          }
        }
      }
      var match = this.className.match(/energy-social-link-(\w+)/);
      if (match) {
        GATrackerObject.trackSocial(match[1], "View", linkURL);
       
      }
     
      if (GATrackerObject.enableGRTracking) {
        if (linkURLHost !== document.location.hostname) {
          for (var j = 0; j < GATrackerObject.crossSiteDomains.length; j++) {
            if (linkURLHost === GATrackerObject.crossSiteDomains[j]) {
              GATrackerObject.trackEvent("Cross-Domain Link", linkWithoutProtocol, linkURLHost+":"+document.domain.toLowerCase()+window.location.pathname.toLowerCase()+document.location.search.toLowerCase());
              ga('linker:decorate', this);
              return;
            }
          }
        }
      }
      var lcDomain = document.domain.toLowerCase();
      if (linkURLHost.indexOf(lcDomain) === -1 && lcDomain.indexOf(linkURLHost) === -1) {
        GATrackerObject.trackEvent("Exit Link", linkWithoutProtocol, linkURLHost+":"+document.domain.toLowerCase()+window.location.pathname.toLowerCase()+document.location.search.toLowerCase());
        return;
      }
    }
  },
  trackEvent: function(category, action, label, value, noninteractive){
    var eventData = {};
    if( noninteractive ) {
      eventData.nonInteraction = 1;
    }
    for( var key in this.universalData ){
      eventData[key] = this.universalData[key];
    }
    if (GATrackerObject.profileID !== "-") {
      ga('siteSpecificTracker.send', 'event', category, action, label, value, eventData);
    }
    if (GATrackerObject.enableGRTracking) {
      ga('globalRollupTracker.send', 'event', category, action, label, value, eventData);
    }
  },
  //method to track social network links
  trackSocial: function(network, action, target){
    if (GATrackerObject.profileID !== "-") {
      ga('siteSpecificTracker.send', 'social', network, action, target);
    }
    if (GATrackerObject.enableGRTracking) {
      ga('globalRollupTracker.send', 'social', network, action, target);
    }
  },
  setCookie: function(c_name,value,domain,exdays){
    var expiry = "",
        domain = domain || this.grCookieDomain;
    if( exdays ){
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      expiry = "; expires="+exdate.toUTCString();
    }
    var c_value = escape(value) + "; path=/; domain=" + domain + expiry;
    document.cookie = c_name + "=" + c_value;
  },
  getCookie: function(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
      c_value = "";
    } else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
  },
  setCustomVar: function(index, key, value, scope){
    this.universalData = this.universalData || {};
    this.universalData["dimension"+index] = value;
    this.universalData["dimension1"+index] = key;
  },
  
};
///////////////////////////////////////////////////////////////////////////////

GATrackerObject.setIDs();
// Google Analytics stock code block (do not edit)
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
// end block
ga(function () {
  if (GATrackerObject.profileID !== "-") {
    ga('create', GATrackerObject.profileID, {
      'name': 'siteSpecificTracker',
      'cookieDomain': GATrackerObject.cookieDomain,
      'cookieName': 'ssGA'
    });
    ga('siteSpecificTracker.send', 'pageview');
  }
  if (GATrackerObject.enableGRTracking) {
    ga('create', GATrackerObject.globalRollupID, {
      'name': 'globalRollupTracker',
      'cookieDomain': GATrackerObject.cookieDomain,
      'cookieName': 'grGA',
      'allowLinker': true
    });
    ga('globalRollupTracker.send', 'pageview');
  }
  if (typeof jQuery == 'undefined') {
    ga('create', GATrackerObject.jQueryTrackingID, {
      'name': 'jqTracker',
      'cookieName': 'jqGA'
    });
    ga('jqTracker.send', 'pageview');
  }
  window.addEventListener('load', function() {
    GATrackerObject.listenToOnsiteSearch();
    GATrackerObject.addEventHandlerToAllLinks();
  });
});
