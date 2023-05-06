import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayCRUDComponent } from './feature/components/form-array-crud/form-array-crud.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {
    path: 'form-array',
    component: FormArrayCRUDComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
