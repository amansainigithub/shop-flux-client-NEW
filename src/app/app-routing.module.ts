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
import { ShowProductComponent } from './pages/productComponent/show-product/show-product.component';
import { UpdateProductComponent } from './pages/productComponent/update-product/update-product.component';
import { UploadFilesProductComponent } from './pages/productComponent/upload-files-product/upload-files-product.component';
import { UploadFilesFormProductComponent } from './pages/productComponent/upload-files-form-product/upload-files-form-product.component';
import { BannerComponent } from './pages/banner/banner/banner.component';
import { ShowBannerComponent } from './pages/banner/show-banner/show-banner.component';
import { UploadBannerFileComponent } from './pages/banner/upload-banner-file/upload-banner-file.component';
import { FinalCategoryComponent } from './pages/finalCategoryComponent/final-category/final-category.component';
import { ShowFinalCategoryComponent } from './pages/finalCategoryComponent/show-final-category/show-final-category.component';
import { UpdateFinalCategoryComponent } from './pages/finalCategoryComponent/update-final-category/update-final-category.component';
import { UploadFilesFinalCategoryComponent } from './pages/finalCategoryComponent/upload-files-final-category/upload-files-final-category.component';
import { UploadFilesFormFinalCatComponent } from './pages/finalCategoryComponent/upload-files-form-final-cat/upload-files-form-final-cat.component';
import { BannerTypeComponent } from './pages/banner/banner-type/banner-type.component';
import { StructureFinalCatSingleComponent } from './pages/structureFinalCategorySingle/structure-final-cat-single/structure-final-cat-single.component';
import { OrderManagementComponent } from './pages/order-Management/order-management/order-management.component';
import { UpdateOrderManagementComponent } from './pages/order-Management/update-order-management/update-order-management.component';
import { ProductSizeComponentComponent } from './pages/product-size-component/product-size-component/product-size-component.component';
import { UpdateProductSizeComponent } from './pages/product-size-component/update-product-size/update-product-size.component';

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
              { path: 'showProduct', component:ShowProductComponent },
              { path: 'updateProduct/:productId', component:UpdateProductComponent },
              { path: 'linkFiles', component:UploadFilesProductComponent },
              { path: 'uploadproductFiles/:productId', component:UploadFilesFormProductComponent },
              { path: 'banner', component:BannerComponent },
              { path: 'showBanner', component:ShowBannerComponent },
              { path: 'uploadBannerFile/:bannerId', component:UploadBannerFileComponent },
              { path: 'createFinalCategory', component:FinalCategoryComponent },
              { path: 'showFinalCategory', component:ShowFinalCategoryComponent },
              { path: 'updateFinalCategory/:finalCategoryId', component: UpdateFinalCategoryComponent},
              { path: 'uploadFilesFinalCategory', component: UploadFilesFinalCategoryComponent},
              { path: 'uploadFormFinalCategoryFiles/:finalCategoryId', component: UploadFilesFormFinalCatComponent},
              { path: 'createBannerType', component: BannerTypeComponent},
              { path: 'saveStructureFinalCategory_Single', component: StructureFinalCatSingleComponent},
              { path: 'orderManagement', component: OrderManagementComponent},
              { path: 'updateOrderManagement/:orderId', component: UpdateOrderManagementComponent},
              { path: 'createProductSize', component:ProductSizeComponentComponent },
              { path: 'updateProductSizeComponent/:productId', component:UpdateProductSizeComponent },


            ]
  },
  { path: '',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
