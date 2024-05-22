#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <curl/curl.h>
#include <cjson/cJSON.h>

// Funzione per creare il body della richiesta JSON
char *create_request_body() {
    cJSON *body = cJSON_CreateObject();
    cJSON_AddItemToObject(body, "contexts", cJSON_CreateStringArray((const char*[]){"company"}, 1));
    cJSON_AddStringToObject(body, "description", "P4SaMD extension");
    cJSON_AddStringToObject(body, "entry", "https://p4samd-governance.test.mia-care.io/");
    cJSON_AddStringToObject(body, "extensionType", "iframe");
    cJSON_AddStringToObject(body, "name", "Product Management");

    cJSON *routes = cJSON_CreateArray();
    cJSON *route = cJSON_CreateObject();
    cJSON_AddStringToObject(route, "destinationPath", "/");
    cJSON *icon = cJSON_CreateObject();
    cJSON_AddStringToObject(icon, "name", "PiProjectorScreenChartLight");
    cJSON_AddItemToObject(route, "icon", icon);
    cJSON_AddStringToObject(route, "id", "p4samd-home");

    cJSON *labelIntl = cJSON_CreateObject();
    cJSON_AddStringToObject(labelIntl, "en", "Dashboard");
    cJSON_AddStringToObject(labelIntl, "it", "Dashboard");
    cJSON_AddItemToObject(route, "labelIntl", labelIntl);

    cJSON_AddStringToObject(route, "locationId", "company");
    cJSON_AddStringToObject(route, "parentId", "my-menu-group");
    cJSON_AddItemToArray(routes, route);
    cJSON_AddItemToObject(body, "routes", routes);

    char *body_str = cJSON_Print(body);
    cJSON_Delete(body);
    return body_str;
}

// Funzione per effettuare la richiesta HTTP PUT
void register_extension(const char *basePath, const char *tenantId) {
    CURL *curl;
    CURLcode res;
    char url[256];

    snprintf(url, sizeof(url), "%s/api/extensibility/tenants/%s/extensions", basePath, tenantId);
    printf("URL: %s\n", url);

    char *body = create_request_body();
    printf("Body: %s\n", body);

    curl_global_init(CURL_GLOBAL_ALL);
    curl = curl_easy_init();

    if (curl) {
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Content-Type: application/json");
        headers = curl_slist_append(headers, "Cookie");
    }
}
