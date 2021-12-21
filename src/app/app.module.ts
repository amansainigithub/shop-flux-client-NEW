import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { RootCategoryComponent } from './pages/rootCategoryComponent/root-category/root-category.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ShowRootCategoryComponent } from './pages/rootCategoryComponent/show-root-category/show-root-category.component';
import {MatTableModule} from '@angular/material/table';
import { UpdateRootCategoryComponent } from './pages/rootCategoryComponent/update-root-category/update-root-category.component';
import { SubCategoryComponent } from './pages/subCategoryComponent/sub-category/sub-category.component';
import {MatSelectModule} from '@angular/material/select';
import { ShowSubCategoryComponent } from './pages/subCategoryComponent/show-sub-category/show-sub-category.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateSubCategoryComponent } from './pages/subCategoryComponent/update-sub-category/update-sub-category.component';
import { UploadFilesRootCategoryComponent } from './pages/rootCategoryComponent/upload-files-root-category/upload-files-root-category.component';
import { UploadFileFormRootCatComponent } from './pages/rootCategoryComponent/upload-file-form-root-cat/upload-file-form-root-cat.component';
import { UploadFilesSubCategoryComponent } from './pages/subCategoryComponent/upload-files-sub-category/upload-files-sub-category.component';
import { UploadFileFormSubCatComponent } from './pages/subCategoryComponent/upload-file-form-sub-cat/upload-file-form-sub-cat.component';
import { AddProductComponent } from './pages/productComponent/add-product/add-product.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    NavbarDashboardComponent,
    DemoComponent,
    DashboardComponent,
    RootCategoryComponent,
    ShowRootCategoryComponent,
    UpdateRootCategoryComponent,
    SubCategoryComponent,
    ShowSubCategoryComponent,
    UpdateSubCategoryComponent,
    UploadFilesRootCategoryComponent,
    UploadFileFormRootCatComponent,
    UploadFilesSubCategoryComponent,
    UploadFileFormSubCatComponent,
    AddProductComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
