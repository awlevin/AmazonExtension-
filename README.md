# AmazonExtension!

## How to run

1. Navigate your Chrome browser to chrome://extensions. 
2. Enable "Developer mode" by clicking the checkbox in the upper righthand corner.
3. Click "Load unpacked extension..." on the top left of the screen.
4. Select this repository.
5. Make sure to check the "Enabled" checkbox next to "AmazonExtension!"

You should now have button for the extension in the navigation bar of your chrome browser!

## How to use
When using any page within Amazon.com, you should now see a nifty helpbar displayed across the top of the page. When you type in a query, it will give you some useful (currently hardcoded) links to help you navigate across the Amazon!

## Adding Links to Help Bar
At the top of inject.js there's a variable called "optionsDict". It is a JSON dictionary that contains all of the relevant fields for a useful link. If you want to add a link, just follow the format of the preexisting dictionary elements, and append yours to the end! 
