import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewPanelModule } from './view-panel/view-panel.module';
import { LinksinfoService } from './linksinfo.service';
import { NodesinfoService } from './nodesinfo.service';
import { NodePanelService } from './node-panel.service';
import { HeaderComponent } from './header/header.component';
import { AddNodeComponent } from './add-node/add-node.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterfaceinfoService } from './interfaceinfo.service';
import { AddLinkComponent } from './add-link/add-link.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { SidePanelTestComponent } from './side-panel-test/side-panel-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNodeComponent,
    AddLinkComponent,
    SideBarComponent,
    TreeViewComponent,
    SidePanelTestComponent

  ],
  imports: [
    BrowserModule,
    ViewPanelModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [NodesinfoService, LinksinfoService, NodePanelService,InterfaceinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
