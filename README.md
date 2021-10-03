<p align="center">
  <img src="https://avatars.githubusercontent.com/u/38729977?s=200&v=4" />
</p>

<h1 align=center>
    LinkApi <code>Coding</code> Challenge 
</h1>


<div align=center>
    <a href="#desc">Description</a> | <a href="#install">Installation</a> | <a href="#config">Config</a> | <a href="#running">Running</a> | <a href="#endpoints">Endpoints</a> | <a href="#docs">Docs</a>
</div>    

<br>

<p align="center">
  <img src="https://nodejs.dev/static/nodejs-logo-light-mode-e8344f71081da53be8ee1098584a0ab6.svg" width="80px"/>
  <br>
  <img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" width="90px"/>
  <img src="https://docs.nestjs.com/assets/logo-small.svg" width="40px"/>
  
</p>

<br>
<hr>
<h2 id="desc"> 
    Description 
</h2>

 Challange proposed by LinkApi as a step of their hiring process.
Tasks:
1. Create a Restful API unsing [Node.js](https://nodejs.org/en/)
    - Create a developer account on both Pipedrive and Bling.  
    - Create a MongoDB Databse Instance (Atlas was recommended).  
    - Create an API Itegration between those two platforms which should get Pipedrive's **Deals** which have the `status` field set as **"won"**, and insert it as a new sell Order at Bling.  
    - Create a `collection` containing the deals and the final amount (deals money values sum) related to a particular day.  
    - Create an endpoint containing to get the needed data.

- - - -
<h2 id="install">
  Installation  
</h2>

Once you're on the project directory run:


```bash
$ yarn
```
Or ...  

```bash
$ npm install
```
- - - -
<h2 id="config">
   Base Config
</h2>

So, the first thing you'll need to do after cloning this repo, is to create a **Mongodb** database instance wherever it is, although I also recommend using **Atlas**. Then, you must
create a `.env` file based on the following example:  
<br>

```bash
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_USER=
PIPEDRIVE_API_TOKEN=
BLING_API_KEY=
BLING_URL=https://bling.com.br/Api/v2

```

<details>
    <summary>:warning: Quick tip </summary>
    This project was designed to connect to the database via uri, so if you wish go through a different process beware that it's on you. 
</details>
<br>

**:floppy_disk: Database**  
 - You can find the missing database information by following the steps described in this [tutorial](https://docs.atlas.mongodb.com/getting-started/).
 - After you get the connection URI you'll have to config it at the [AppModule](https://github.com/gabrielFernandes-dev/linkapi-challenge-v2/blob/master/src/app.module.ts) (you must change this => "<domain>");
 
**:chart_with_upwards_trend: Pipedrive CRM**
 - You must create a [Developer account](https://developers.pipedrive.com) at the **Pipedrive** platform and get the API key, which can be done by following [these](https://support.pipedrive.com/en/article/how-can-i-find-my-personal-api-key) steps.
 
**:bar_chart: Bling ERP**
 - You can create a **Developer account** at the Bling platform ang get the API key my clicking in [this link](https://ajuda.bling.com.br/hc/pt-br/articles/360035558634-Usu%C3%A1rio-e-Usu%C3%A1rio-API).

<br>

<h1 align=center>
  :hourglass_flowing_sand:  
</h1>
  
- - - - 
<h2 id="running">
 Running the app
</h2>

For running this application run one of following commands:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Your server should be up and running by now. Have Fun! :rocket: :tada: :wink:

 - - - -  
<h2 id="endpoints">
 Endpoints
</h2>


1. :incoming_envelope: ***POST*** `api/integration/migrate` 
    - Executes the integration.
2. :open_file_folder: ***GET*** `api/integration/record`
    - Retrives data from the database.
- - - -

<h2 id="docs">
 Docs
</h2>

Once the project is running, you can make requests from the [Swagger](https://docs.nestjs.com/openapi/introduction) Documentation page of this Project. You can access it by openening `http://localhost:3000/api/docs`.
