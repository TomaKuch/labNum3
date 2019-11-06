import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
// import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
    ],

    exports: [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
    ]
})

export class MaterialModule {

}
