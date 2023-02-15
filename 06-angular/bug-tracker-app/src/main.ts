import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/* install moment using 
    ng add moment
*/
import * as moment from 'moment'
const d = new Date('10-Feb-2023')
console.log(moment(d).fromNow())

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
