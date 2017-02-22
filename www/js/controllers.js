angular.module('starter.controllers', [])

.controller('PictureCtrl', function($scope, $cordovaCamera) {


    document.addEventListener("deviceready", function() {
        document.getElementById("btn").addEventListener("click", function() {
            var options = {
            quality: parseInt(document.getElementById("txtCameraQuantity").value),
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: document.getElementById("selCameraAllowEdit").value=="true"? true : false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: document.getElementById("picwidth").value,
            targetHeight: document.getElementById("picheight").value,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true,
            correctOrientation: document.getElementById("correctOrientation").value=="true"?true:false,
            cameraDirection:parseInt(document.getElementById("cameraDirection").value)
        };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('testimg');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // error
            });
        });



    }, false);
})

.controller('DashCtrl', function($scope) {})



.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
