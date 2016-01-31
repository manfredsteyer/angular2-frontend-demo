System.register(['angular2/platform/browser', 'angular2/core', './flug-suchen/flug-suchen', './services/flug-service', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, core_1, flug_suchen_1, flug_service_1, http_1;
    var services;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_suchen_1_1) {
                flug_suchen_1 = flug_suchen_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            services = [
                // FlugService // FlugService --> FlugService
                core_1.provide(flug_service_1.FlugService, { useClass: flug_service_1.FlugService }),
                http_1.HTTP_PROVIDERS
            ];
            browser_1.bootstrap(flug_suchen_1.FlugSuchen, services);
        }
    }
});
//# sourceMappingURL=boot.js.map