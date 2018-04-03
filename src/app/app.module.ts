import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { PeoplePage } from '../pages/people/people';
import { PostsPage } from '../pages/posts/posts';
import { ProfilePage } from '../pages/profile/profile';
import { RtbProvider } from '../providers/rtb/rtb';
import { CustomHttpService } from '../providers/custom-http-service/custom-http-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    TabsPage,
    PeoplePage,
    PostsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    TabsPage,
    PeoplePage,
    PostsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RtbProvider,
    CustomHttpService,
  ]
})
export class AppModule {}
