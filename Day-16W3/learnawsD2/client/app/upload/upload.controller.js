(function () {

  angular
    .module("UploadApp")
    .controller("UploadCtrl", UploadCtrl);
  UploadCtrl.$inject = ("Upload");

  function UploadCtrl(uplooad) {
    var vm = this;
    vm.imgFile = null;
    vm.status = {
      message: "",
      code: 0
    };

    function upload() {
        Upload.upload({
          url: '/upload',
          data: {
            "img-file": vm.imgFile,
          }

        }).then(function (response) {
          vm.fileurl = response.data;
          vm.status.message = "Successful";
          vm.status.code =202;

        }).catch(function (err) {
          console.log(err);
          vm.status.message =
        })
    }
  }

})
