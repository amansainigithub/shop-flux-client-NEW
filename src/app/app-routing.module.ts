import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthLoginGuard } from './authGuards/auth-login.guard';
import { RootCategoryComponent } from './pages/rootCategoryComponent/root-category/root-category.component';
import { ShowRootCategoryComponent } from './pages/rootCategoryComponent/show-root-category/show-root-category.component';
import { UpdateRootCategoryComponent } from './pages/rootCategoryComponent/update-root-category/update-root-category.component';
import { SubCategoryComponent } from './pages/subCategoryComponent/sub-category/sub-category.component';
import { ShowSubCategoryComponent } from './pages/subCategoryComponent/show-sub-category/show-sub-category.component';
import { UpdateSubCategoryComponent } from './pages/subCategoryComponent/update-sub-category/update-sub-category.component';
import { UploadFilesRootCategoryComponent } from './pages/rootCategoryComponent/upload-files-root-category/upload-files-root-category.component';
import { UploadFileFormRootCatComponent } from './pages/rootCategoryComponent/upload-file-form-root-cat/upload-file-form-root-cat.component';
import { UploadFilesSubCategoryComponent } from './pages/subCategoryComponent/upload-files-sub-category/upload-files-sub-category.component';
import { UploadFileFormSubCatComponent } from './pages/subCategoryComponent/upload-file-form-sub-cat/upload-file-form-sub-cat.component';
import { AddProductComponent } from './pages/productComponent/add-product/add-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'demo',component:DemoComponent},
  { path: 'dashboard',canActivate:[AuthLoginGuard], 
  children: [
              { path: '', component: DashboardComponent},
              { path: 'createRootCategory', component: RootCategoryComponent},
              { path: 'showRootCategory', component: ShowRootCategoryComponent},
              { path: 'updateRootCategory/:rootCategoryId', component: UpdateRootCategoryComponent},
              { path: 'createSubCategory', component: SubCategoryComponent},
              { path: 'showSubCategory', component: ShowSubCategoryComponent},
              { path: 'updateSubCategory/:subCategoryId', component: UpdateSubCategoryComponent},
              { path: 'uploadFilesRootCategory', component: UploadFilesRootCategoryComponent},
              { path: 'uploadFormRootCategoryFiles/:rootCategoryId', component: UploadFileFormRootCatComponent},
              { path: 'uploadFilesSubCategory', component: UploadFilesSubCategoryComponent},
              { path: 'uploadFormSubCategoryFiles/:subCategoryId', component: UploadFileFormSubCatComponent},
              { path: 'addProduct', component: AddProductComponent},
             


            ]
  },
  { path: '',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
