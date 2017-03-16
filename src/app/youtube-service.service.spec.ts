import { TestBed, inject } from '@angular/core/testing';

import { YoutubeServiceService } from './youtube-service.service';

describe('YoutubeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeServiceService]
    });
  });

  it('should ...', inject([YoutubeServiceService], (service: YoutubeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
