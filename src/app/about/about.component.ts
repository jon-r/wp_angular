import { Component, OnInit } from '@angular/core';


import About from './about';

import { MotionService } from '../shared/motion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  about = About;

  constructor(private motionService: MotionService) { }

// TODO need to consider the main maenu responisively on this page

  ngOnInit() {
    this.motionService.transform({
      home: 'translate(calc(512px - 50vw), calc(256px - 100vh))',
      framer: 'skewY(-10deg)',
      gridMask: { from: [0, 0], to: [0.4, 1] },
    });
  }

}
