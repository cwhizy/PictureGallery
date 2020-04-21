import { Component, OnInit } from '@angular/core';
import { MediaResponse } from '@/_models';
import { AuthenticationService, PhotosService } from '@/_services';

@Component({ 
    templateUrl: './mainfeed.component.html',
    //styleUrls: ['./mainfeed.component.css'],
    providers: [PhotosService]
})
export class MainfeedComponent implements OnInit {
    
    mediaResponse: MediaResponse;

    constructor(
        private authenticationService: AuthenticationService,        
        private photosService: PhotosService
    ) { }

    ngOnInit() {        
        this.photosService.getPhotos()
        .subscribe( response => {
            console.log(response);
            this.mediaResponse = response;
        }, error => {
            console.log(error);
        });
    }
}