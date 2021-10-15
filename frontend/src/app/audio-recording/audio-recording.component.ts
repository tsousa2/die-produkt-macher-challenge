import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StereoAudioRecorder } from 'recordrtc';

declare var $: any;
@Component({
  selector: 'audio-recording',
  templateUrl: './audio-recording.component.html',
  styleUrls: ['./audio-recording.component.css'],
})
export class AudioRecordingComponent {
  title = 'micRecorder';
  record: any;
  recording = false;
  url = '';
  error: any;

  constructor(private domSanitizer: DomSanitizer) {}

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {}

  /**
   * Start recording.
   */
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream: any) {
    var options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1,
      sampleRate: 16000,
    };
    //Start Actuall Recording
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob: any) {
    this.url = URL.createObjectURL(blob);
    console.log('blob', blob);
    console.log('url', this.url);
  }
  /**
   * Process Error.
   */
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }
}
