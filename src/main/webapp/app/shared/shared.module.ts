import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyApp1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MyApp1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MyApp1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyApp1SharedModule {
  static forRoot() {
    return {
      ngModule: MyApp1SharedModule
    };
  }
}
