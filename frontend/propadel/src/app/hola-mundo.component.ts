import { Component } from "@angular/core"; //decorador 2 
import { AppModule } from "./app.module";

@Component({ //3
    selector:'hola-mundo', // selector como de css .id #id
    template:'<p>Hola mundo Component</p>' //template
})
export class HolaMundoComponent{} //pascalcase 1

// vamos al modulo AppModule!!!
