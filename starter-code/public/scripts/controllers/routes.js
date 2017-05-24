'use strict';

// Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
// page.base('');
page('/', window.topicController.index);
page('/about', window.aboutController.index);
page('/repos', window.reposController.index);

// This function call will activate page.js? Fire it off now, to execute
page();
