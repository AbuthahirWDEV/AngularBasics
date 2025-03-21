# Basic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## learnings

# Modules 
     in modules we have bunch of related components 

# Data bindings 

    1) Interpolation (one-way binding)
        EXAMPLE: {{ }} - string interpolation
    2) Property binding (one-way binding)
        EXAMPLE: <app-greeting [message]="appMessage"></app-greeting>
    3) Event binding (one-way binding)
        EXAMPLE: <button (click)="onClick()">Click Me</button>
    4) Two way binding
        EXAMPLE: <input [(ngModel)]="appMessage">

# components
    create a component 
    register component  in a module of declarations[]
    add a element in HTML markup to render 

# Directives
    *ngFor
    *ngIf

# service 
    <!-- Basic for TS -->
        create a service 
        register service in a module of provider[]
        to use that add in a constructor parameter
        this is called (Dependency injection)

    <!-- Angular lifecycle hook -->
        create a service 
        to use in components use inject() from angular/core 
        and do implemets OnInit from core 
        use ngOnInit(): void {

        } 

# parent to child 
    # @Input() - is a decerator used to send data from parent to child

# child to parent 
    # @Output() - is a decorator used to send data from child to parent 

# Event listeners
    EXAMPLE :  <button (click)='increment()'>Increment</button>

# Routing
    # standalone component - no need to put in NgModule declaraions direclty we can call in routing
    # in app html call router component

# HTTP calls in Angular 
    # provide HTTP module / providers in the app module using provideHttpClient()
    # inject the HttpClient service in service 
    # use http methods

# lifecycle hooks in angular 

# ngOnChanges()
    # ✅ ngOnChanges() only runs when an @Input() changes.
    # ✅ It is useful for detecting input updates and reacting to them.
    # ✅ SimpleChanges contains details about previous and current values.
    # ✅ Does not run on local variable changes, only when inputs change from a parent component.
