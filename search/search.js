/**
 * A simple JSON search
 * Requires jQuery (v 1.7+)
 *
 * @author  Mat Hayward - Erskine Design
 * @version  0.1
 */

/* ==========================================================================
   Initialisation
   ========================================================================== */

var q, jsonFeedUrl = "/search/feed.json",
    $searchForm = $("[data-search-form]"),
    $searchInput = $("[data-search-input]"),
    $resultTemplate = $("#search-result"),
    $resultsPlaceholder = $("[data-search-results]"),
    $loading = $("[loading]"),
    $foundContainer = $("[data-search-found]"),
    $foundTerm = $("[data-search-found-term]"),
    $foundCount = $("[data-search-found-count]"),
    allowEmpty = true,
    showLoader = true,
    loadingClass = "loadingSpinner";


$(document).ready(function () {
    // hide items found string
    $foundContainer.hide();

    // initiate search functionality
    initSearch();
});




/* ==========================================================================
   Search functions
   ========================================================================== */


/**
 * Initiate search functionality.
 * Shows results based on querystring if present.
 * Binds search function to form submission.
 */
function initSearch() {

    // Get search results if q parameter is set in querystring
    if (getParameterByName('q')) {
        q = decodeURIComponent(getParameterByName('q'));
        $searchInput.val(q);
        execSearch(q);
    }

    // Get search results on submission of form
    $(document).on("submit", $searchForm, function (e) {
        e.preventDefault();
        q = $searchInput.val();
        execSearch(q);
    });
}

(function (expCharsToEscape, expEscapedSpace, expNoStart, undefined) {
    /**
     * Modifies the given URL, returning it with the given parameter
     * changed to the given value.  The parameter is added if it didn't
     * already exist.  The parameter is removed if null or undefined is
     * specified as the value.
     * @param {string} url  The URL to be modified.
     * @param {string} paramName  The URL parameter whose value will be
     *     modified.
     * @param {string} paramValue  The value to assign.  This will be
     *     escaped using encodeURIComponent.
     * @return {string}  The updated URL.
     */
    modURLParam = function (url, paramName, paramValue) {
        paramValue = paramValue != undefined
          ? encodeURIComponent(paramValue).replace(expEscapedSpace, '+')
          : paramValue;
        var pattern = new RegExp(
          '([?&]'
          + paramName.replace(expCharsToEscape, '\\$1')
          + '=)[^&]*'
        );
        if (pattern.test(url)) {
            return url.replace(
              pattern,
              function ($0, $1) {
                  return paramValue != undefined ? $1 + paramValue : '';
              }
            ).replace(expNoStart, '$1?');
        }
        else if (paramValue != undefined) {
            return url + (url.indexOf('?') + 1 ? '&' : '?')
              + paramName + '=' + paramValue;
        }
        else {
            return url;
        }
    };
})(/([\\\/\[\]{}().*+?|^$])/g, /%20/g, /^([^?]+)&/);

// Add / Update a key-value pair in the URL query parameters
function updateUrlParameter(uri, key, value) {
    // remove the hash part before operating on the uri
    var i = uri.indexOf('#');
    var hash = i === -1 ? '' : uri.substr(i);
    uri = i === -1 ? uri : uri.substr(0, i);

    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        uri = uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        uri = uri + separator + key + "=" + value;
    }
    return uri + hash;  // finally append the hash as well
}

/**
 * Executes search
 * @param {String} q 
 * @return null
 */
function execSearch(q) {
    if (q != '' || allowEmpty) {

        if (getParameterByName("q") != q) {
            //updateUrlParameter(window.location.href, "q", q);
            modURLParam(window.location.href, "q", q);
        }

        if (showLoader) {
            toggleLoadingClass();
        }

        getSearchResults(processData());
    }
}


/**
 * Toggles loading class on results and found string
 * @return null
 */
function toggleLoadingClass() {
    //$loading.toggleClass(loadingClass);
    //$resultsPlaceholder.toggleClass(loadingClass);
    //$foundContainer.toggleClass(loadingClass);
}


/**
 * Get Search results from JSON
 * @param {Function} callbackFunction 
 * @return null
 */
function getSearchResults(callbackFunction) {
    $.get(jsonFeedUrl, callbackFunction, 'json');
}


/**
 * Process search result data
 * @return null
 */
function processData() {
    $results = [];

    return function (data) {

        var resultsCount = 0,
            results = "";

        $.each(data, function (index, item) {
            // check if search term is in content or title 
            if (item.seach_omit != "true" && (item.content.toLowerCase().indexOf(q.toLowerCase()) > -1 || item.title.toLowerCase().indexOf(q.toLowerCase()) > -1)) {
                var result = populateResultContent($resultTemplate.html(), item);
                resultsCount++;
                results += result;
            }
        });

        if (showLoader) {
            toggleLoadingClass();
        }

        populateResultsString(resultsCount);
        showSearchResults(results);
    }
}


/**
 * Add search results to placeholder
 * @param {String} results
 * @return null
 */
function showSearchResults(results) {
    // Add results HTML to placeholder
    $resultsPlaceholder.html(results);
}

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return (day + ' ' + monthNames[monthIndex] + ' ' + year);
}

/**
 * Add results content to item template
 * @param {String} html 
 * @param {object} item
 * @return {String} Populated HTML
 */
function populateResultContent(html, item) {
    if (item.lang == 'ar') {
        html = injectContent(html, "rtl", '##CssClass##');
    }
    html = injectContent(html, item.title, '##Title##');
    html = injectContent(html, item.link, '##Url##');
    html = injectContent(html, item.excerpt, '##Excerpt##');
    html = injectContent(html, formatDate(item.date), '##Date##');
    return html;
}


/**
 * Populates results string
 * @param {String} count 
 * @return null
 */
function populateResultsString(count) {
    $foundTerm.text(q);
    $foundCount.text(count);
    $foundContainer.show();
}




/* ==========================================================================
   Helper functions
   ========================================================================== */


/**
 * Gets query string parameter - taken from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 * @param {String} name 
 * @return {String} parameter value
 */
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


/**
 * Injects content into template using placeholder
 * @param {String} originalContent
 * @param {String} injection
 * @param {String} placeholder 
 * @return {String} injected content
 */
function injectContent(originalContent, injection, placeholder) {
    var regex = new RegExp(placeholder, 'g');
    return originalContent.replace(regex, injection);
}