import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { saveAs } from "file-saver";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  downloadCsv() {
    this.http.get("/csv", { observe: "response", responseType: "blob" }).subscribe(response => {
      console.log(response);

      const contentDispositionHeader: string = response.headers.get("Content-Disposition");
      if (!contentDispositionHeader) {
        return;
      }

      const parts: string[] = contentDispositionHeader.split(";");
      if (!parts || !parts[1]) {
        return;
      }

      const filename = parts[1].split("=")[1];

      saveAs(response.body, filename);
    });
  }

  downloadJson() {
    this.http.get("/json", { observe: "response", responseType: "blob" }).subscribe(response => {
      const contentDispositionHeader: string = response.headers.get("Content-Disposition");
      if (!contentDispositionHeader) {
        return;
      }

      const parts: string[] = contentDispositionHeader.split(";");
      if (!parts || !parts[1]) {
        return;
      }

      const filename = parts[1].split("=")[1];

      saveAs(response.body, filename);
    });
  }
}
