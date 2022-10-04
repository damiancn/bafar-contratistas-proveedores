import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// ! No se va a utilizar
// import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { removeAllCitas } from 'src/app/store/citas/cita.actions';
import { removerEmpresas } from 'src/app/store/empresas/empresa.actions';
import { removerMotivoVisitaAll } from 'src/app/store/motivosVisita/motivosVisita.actions';
import { removerTags, tagsLoaded } from 'src/app/store/tags/tag.actions';
import { removerAllUsuarios } from 'src/app/store/usuarios/usuarios.action';
import { UsuarioStateModel } from 'src/app/store/usuarios/usuarios.model';
import { UsuariosState } from 'src/app/store/usuarios/usuarios.state';
import { removerVehiculosAll } from 'src/app/store/vehiculos/vehiculos.actions';
import { removeAllVisitantes } from 'src/app/store/visitantes/visitantes.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  @ViewChild("sidebar")
  sidebar!: ElementRef;

  @ViewChild("foto_perfil")
  fotoPerfil!: ElementRef;

  @ViewChild("fab")
  fab!: ElementRef;

  public showWebcam = true;
  public deviceId?: string;
  public multipleWebcamsAvailable = false;
  public messages: any[] = [];
  // public webcamImage?: WebcamImage = undefined;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  error: any = false;

  sidebarActive: boolean = false;
  panelOpenState: boolean = false;
  permiso: string = '';
  usuarioActivo: any[] = [];
  modalRefTakePhotoProfile?: BsModalRef | null;

  @Select(UsuariosState)
  usuarios$!: Observable<UsuarioStateModel>

  constructor(
    private authenticatorService: AuthenticationService,
    private modalService: BsModalService,
    private renderer2: Renderer2,
    private sidebarService: SidebarService,
    private store: Store,
  ) {
  }
  
  ngOnInit(): void {
    this.establecerUsuarios(this.usuarios$);
    console.log(this.usuarioActivo);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  };

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  };

  addMessage(message: any): void {
    console.log(message);
    this.messages.unshift(message);
  };

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  };

  private updatePictureProfile(usuarioActivo: any[]) {
    console.warn(usuarioActivo)
  }

  openFile() {
    console.log('hell')

    this.fotoPerfil.nativeElement.click();
  }

  handle(event: any) {
    console.warn(event)
    console.warn('Change input file')
  }

  openTakePhotoProfileModal(template: TemplateRef<any>, usuarioActivo: any) {
    console.warn(usuarioActivo);
    this.modalRefTakePhotoProfile = this.modalService.show(template,
      {
        class: 'modal-lg',
        ignoreBackdropClick: true,
        keyboard: false,
        animated: true,
        backdrop: true,
        show: true
      });

    this.closeTakePhotoProfileModal();
  }

  closeTakePhotoProfileModal() {
    this.modalRefTakePhotoProfile?.hide();
    // this.onHideFotosModal();
  }

  tomarFotoPerfil() {
    this.closeTakePhotoProfileModal();
    this.openFile();
  }

  agregarClaseActivo() {
    if (this.sidebarActive) {
      this.renderer2.removeClass(this.sidebar.nativeElement, 'active');
      this.renderer2.removeClass(this.fab.nativeElement, 'active');
      this.sidebarActive = false;
    } else {
      this.renderer2.addClass(this.sidebar.nativeElement, 'active');
      this.renderer2.addClass(this.fab.nativeElement, 'active');
      this.sidebarActive = true;
    }
  }

  // CARGAR ARREGLO DE USUARIOS
  establecerUsuarios(usuariosObservable: Observable<UsuarioStateModel>): any {
    return usuariosObservable.subscribe((usuarioSubscription: any) => {
      if (usuarioSubscription.usuarioActivo.lenght !== 0) {
        // console.warn(usuarioSubscription)
        this.usuarioActivo = usuarioSubscription.usuarioActivo.map((usuarioObject: any) => usuarioObject);
      }
    });
  };

  openSubmenu() {
    console.log('openSubmenu');
    this.renderer2.addClass(this.sidebar.nativeElement, 'active');
    this.renderer2.addClass(this.fab.nativeElement, 'active');
    this.sidebarActive = true;
  }

  eliminarVehiculosDelStore() {
    this.store.dispatch(new removerVehiculosAll());
  };

  eliminarCitasDelStore() {
    this.store.dispatch(new removeAllCitas());
  };

  eliminarVisitantesDelStore() {
    this.store.dispatch(new removeAllVisitantes());
  };

  eliminarEmpresasDelStore() {
    this.store.dispatch(new removerEmpresas());
  };

  eliminarMotivosVisitaDelStore() {
    this.store.dispatch(new removerMotivoVisitaAll());
  };

  eliminarUsuarioDelStore() {
    this.store.dispatch(new removerAllUsuarios());
  };

  eliminarTagsDelStore() {
    this.store.dispatch(new removerTags());
  }

  setTagsLoadedFalse() {
    this.store.dispatch(new tagsLoaded(false));
  }

  logout() {
    this.authenticatorService.logout();
    // this.eliminarVehiculosDelStore();
    // this.eliminarCitasDelStore();
    // this.eliminarVisitantesDelStore();
    // this.eliminarEmpresasDelStore();
    // this.eliminarMotivosVisitaDelStore();
    // this.eliminarUsuarioDelStore();
    // this.eliminarTagsDelStore();
    // this.setTagsLoadedFalse();
  }
}
