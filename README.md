# arcgis-wabde-widget-template

Use this template as the starting point for developing a new widget
for "ArcGIS Web AppBuilder, Developer Edition" (WABDE)

## Development

Set up WABDE on your local machine and get it running. I assume you will get it running here: <http://localhost:3344/webappbuilder>

Clone this repo into the WABDE instance.

So for example on my machine I have C:/Users/bwilson/source/repos/ArcGISWebAppBuilder/
and the widget goes in client/stemapp/widgets.

```bash
cd /c/Users/bwilson/source/repos/ArcGISWebAppBuilder/client/stemapp/widgets
git clone git@Wildsong/arcgis-wabde-widget-template.git MyNewWidget
```

Copy the app config file and edit it,

```bash
cd ..
cp sample-configs/config-demo.json configs/dev.json
```

Edit dev.json file to add the new widget.

Use this URL to access your widget for testing. <https://localhost:3344/webappbuilder/stemapp/?config=configs/dev.json>

## References

* Web AppBuilder for ArcGIS (Developer Edition)
** (Guide [https://developers.arcgis.com/web-appbuilder/guide/get-started.htm])
* Docs for (ArcGIS API for JavaScript 3.x [https://developers.arcgis.com/javascript/3/])
* (Video, "How to Create a Custom Web AppBuilder Widget from Scratch" [https://www.youtube.com/watch?v=u0x-x8y6AWA])
