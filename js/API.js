class API {

    async obtainData(){

        const total = 1000;
        //Obtaining data from the GovAPI
        const data = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        // Return the response as JSON.
        const responseJSON = await data.json();

        return {

            responseJSON
        }

    }

}