// module
var crudApp = angular.module('crudApp', []);
crudApp.controller("DbController", ['$scope', '$http', function ($scope, $http) {
    $scope.selectStore = {};
    $scope.selcetMaterial = {};
    $scope.date = new Date();



    getInfo();

    function getInfo() {
        var query = "{  storematerials   {       id,     quantity,    store    {     id,      store_name     },     material    {      id,      name ,description    }  } materials{    id,    name  }  stores{    id,    store_name }}";

        $.ajax({
            method: 'post',
            url: 'http://localhost:8088/graphql',
            data: JSON.stringify({
                query: query
            }),
            contentType: 'application/json',
            success: function (data) {
                //assign data to angjular object					

                //alert(JSON.stringify(data.data.stores));
                $scope.details = data.data.storematerials;

                $scope.selectStore = data.data.stores;
                $scope.selcetMaterial = data.data.materials;
                //alert(json.storematerials);
            },
            error: function (data) {
                alert("err:" + data);
            }

        });

    }


    $scope.storeInfo = {
        'location': '1'
    };
    $scope.materialInfo = {};
   // $scope.sotreMatInfo = {};

    ///$scope.selectStore = {};
    //$scope.selcetMaterial = {};

    $scope.show_form = true;
    // Function to add toggle behaviour to form
    $scope.formToggle = function () {
        $('#storeMaterialForm').slideToggle();
        $('#editForm').css('display', 'none');
        $('#addStore').css('display', 'none');
        $('#addMaterial').css('display', 'none');
    }


    $scope.addStore = function () {

        $('#addStore').slideToggle();
        $('#editForm').css('display', 'none');
        $('#storeMaterialForm').css('display', 'none');
        $('#addMaterial').css('display', 'none');


    }
    $scope.addMaterial = function () {
        $('#addMaterial').slideToggle();
        $('#editForm').css('display', 'none');
        $('#storeMaterialForm').css('display', 'none');
        $('#addStore').css('display', 'none');


    }




    //insert store info

    $scope.insertStoreInfo = function (info) {

        // add new store to DB

        var query = 'mutation {  storeCreate(store_name: "' + info.name + '",location:"1",description:"' + info.description + '"){ id store_name    location   description  }}';


        $.ajax({
            method: 'post',
            url: 'http://localhost:8088/graphql',
            data: JSON.stringify({
                query: query
            }),
            contentType: 'application/json',
            success: function (data) {
                //assign data to angjular object

                alert("A New Store Added");
                $('#addStore').slideToggle();
                $scope.storeInfo = {};
                getInfo();
                //alert(JSON.stringify(data.data.storematerials));
                //$scope.details = data.data.storematerials;

                //alert(json.storematerials);
            },
            error: function (data) {
                alert("err:" + data);
            }

        });




        /*$http.post('databaseFiles/insertDetails.php',{"name":info.name,"email":info.email,"address":info.address,"gender":info.gender}).success(function(data){
        if (data == true) {
        getInfo();
        $('#storeMaterialForm').css('display', 'none');
        }
        });*/
    }




    //insert material info

    $scope.insertMaterialInfo = function (info) {

        // add new material to DB

        var query = 'mutation {  materialCreate(name: "' + info.name + '",description:"' + info.description + '"){ id name     description  }}';


        $.ajax({
            method: 'post',
            url: 'http://localhost:8088/graphql',
            data: JSON.stringify({
                query: query
            }),
            contentType: 'application/json',
            success: function (data) {
                //assign data to angjular object

                alert("A New Material Added");
                $('#addMaterial').slideToggle();
                $scope.materialInfo = {};
                getInfo();
                //alert(JSON.stringify(data.data.storematerials));
                //$scope.details = data.data.storematerials;

                //alert(json.storematerials);
            },
            error: function (data) {
                alert("err:" + data);
            }

        });




        /*$http.post('databaseFiles/insertDetails.php',{"name":info.name,"email":info.email,"address":info.address,"gender":info.gender}).success(function(data){
        if (data == true) {
        getInfo();
        $('#storeMaterialForm').css('display', 'none');
        }
        });*/
    }




    $scope.insertInfo = function (info) {

        //alert(info.material_id);
        var query = 'mutation {  storematerialCreate(material_id: "' + info.material_id + '",store_id:"' + info.store_id + '",quantity:"' + info.quantity + '",create_date:"2017-12-11 00:00:00"){ id material{id} store{id}     quantity  create_date}}';

        $.ajax({
            method: 'post',
            url: 'http://localhost:8088/graphql',
            data: JSON.stringify({
                query: query
            }),
            contentType: 'application/json',
            success: function (data) {
                //assign data to angjular object
                getInfo();
                alert("Material Quantity is added to Store");
                $('#storeMaterialForm').slideToggle();
                $scope.sotreMatInfo = {};

                //alert(JSON.stringify(data.data.storematerials));
                //$scope.details = data.data.storematerials;

                //alert(json.storematerials);
            },
            error: function (data) {
                alert("err:" + data);
            }

        });
    }
    $scope.deleteInfo = function (info) {
        var query = 'mutation {  storematerialDelete(id: "' + info.id + '") {    id    material {      id    }    store {      id    }   quantity create_date  }}';
        $.ajax({
            method: 'post',
            url: 'http://localhost:8088/graphql',
            data: JSON.stringify({
                query: query
            }),
            contentType: 'application/json',
            success: function (data) {
                //assign data to angjular object
                getInfo();
                alert("Store Material Deleted from Store");
                //$('#storeMaterialForm').slideToggle();
                //$scope.sotreMatInfo = {};

                //alert(JSON.stringify(data.data.storematerials));
                //$scope.details = data.data.storematerials;

                //alert(json.storematerials);
            },
            error: function (data) {
                alert("err:" + data);
            }

        });
    }
    $scope.currentStoreMaterial = {};
    $scope.editInfo = function (info) {

        $scope.currentStoreMaterial = info;
        $('#storeMaterialForm').css('display', 'none');
        $('#editForm').slideToggle();
        $('#addStore').css('display', 'none');
        $('#addMaterial').css('display', 'none');

    }




    $scope.UpdateInfo = function (info) {
        var query = 'mutation {  storematerialUpdate(id:' + info.id + ',material_id: ' + info.material.id + ',store_id:' + info.store.id + ',quantity:"' + info.quantity + '",create_date:"2017-12-11 00:00:00"){ id material{id} store{id}     quantity  create_date}}';

        $.ajax({
            method: 'post',
            url: 'http://localhost:8088/graphql',
            data: JSON.stringify({
                query: query
            }),
            contentType: 'application/json',
            success: function (data) {
                //assign data to angjular object
                getInfo();
                alert("Material Updated to Store");
                //$('#editForm').slideToggle();
                $scope.sotreMatInfo = {};

                //alert(JSON.stringify(data.data.storematerials));
                //$scope.details = data.data.storematerials;

                //alert(json.storematerials);
            },
            error: function (data) {
                alert("err:" + data);
            }

        });

    }
    $scope.updateStoreMaterial = function (emp_id) {
        $('#editForm').css('display', 'none');
    }
}]);