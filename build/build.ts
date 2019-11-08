import * as packager from "ng-packagr";
import * as yargs from "yargs";

const modules = [
    "core",
    "browser/form-helper",
    "browser/match-media",
    "dom-sanitizer",
    "forms",
    "router"
];

(async () => {

    try {

        for (const module of modules) {

            if (yargs.argv._.length > 0 && yargs.argv._[0] !== module) {
                continue;
            }

            try {
                await packager
                    .ngPackagr()
                    .forProject(`src/${module}/package.json`)
                    .withTsConfig("tsconfig.lib.json")
                    .build();
            } catch (error) {
                console.error(error);
                process.exit(0);
            }

            // const json = readJsonSync(`dist/${module}/package.json`);
            // for (const prop of ["main", "module", "es2015", "esm5", "esm2015", "fesm5", "fesm2015"]) {
            //     delete json[prop];
            // }
            //
            // json["main"] = `esm2015/${module}-module.js`;
            //
            // writeJsonSync(`dist/${module}/package.json`, json);
            // removeSync(`dist/${module}/esm5`);
        }

    } catch (error) {
        console.error(error);
        process.exit(0);
    }

})();
