import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileService} from "../services/files/file-service";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.less']
})
export class FileUploaderComponent {

  @Input()
  saveLocation: string = "hey";

  @Input()
  description: string = "description";

  @Input()
  fileExtensions: string = "";

  @Output()
  onFileChosen: EventEmitter<File> = new EventEmitter();

  private fileToUpload: File;

  constructor(private fileService: FileService) {
  }

  public handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
    this.onFileChosen.emit(this.fileToUpload);
  }

  public onUploadButtonClick(): void {
    this.fileService.uploadFile(this.fileToUpload, this.saveLocation).subscribe(() => {
      this.onSuccessUpload();
      this.fileToUpload = null;
    }, error => {
      console.log("Error");
    });
  }

  public onRemoveFileClick(): void {
    this.fileToUpload = null;
    const input = <HTMLInputElement>document.getElementById("file");
    input.value = "";
  }

  public onSuccessUpload(): void {
    console.log("Success");
  }

}
