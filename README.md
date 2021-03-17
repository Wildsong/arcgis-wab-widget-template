# arcgis-wabde-widget-template

Use this template as the starting point for developing a new widget
for "ArcGIS Web AppBuilder, Developer Edition" (WABDE)

## Development

### Prerequisites

You can run WABDE anywhere you like. It's not hard, you have to get NodeJS installed and running. I am using Docker.

Set up WABDE on your local machine and get it running. We keep the installer locally in I:/Installers/arcgis/WAB.
(Some widgets are there too.) It unzips into a folder ArcGISWebAppBuilder/

WABDE is a NodeJS app so first install NodeJs.
I assume you will get WABDE running here: <http://localhost:3344/webappbuilder>
On Windows, "getting it running"" means download, unpack, and run "start.bat".

Clone this repo into your nice new WABDE instance.
For example on my machine I put WABDE in C:/Users/bwilson/source/repos/ArcGISWebAppBuilder/
and the widget goes in client/stemapp/widgets.

```bash
cd /c/Users/bwilson/source/repos/ArcGISWebAppBuilder/client/stemapp/widgets
git clone git@Wildsong/arcgis-wabde-widget-template.git MyNewWidget
```

Copy the app config file and edit it,

```bash
cd ..
cp dev.json ../configs/dev.json
```

Edit dev.json file to add the new widget you are creating.

Use this URL to access your widget for testing. 
<http://localhost:3344/webappbuilder/stemapp/?config=configs/dev.json>

## References

* Web AppBuilder for ArcGIS (Developer Edition)
** (Guide [https://developers.arcgis.com/web-appbuilder/guide/get-started.htm])
* Docs for (ArcGIS API for JavaScript 3.x [https://developers.arcgis.com/javascript/3/])
* (Video, "How to Create a Custom Web AppBuilder Widget from Scratch" [https://www.youtube.com/watch?v=u0x-x8y6AWA])
