import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent {

  id: string | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
  }

}