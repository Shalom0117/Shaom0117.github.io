(function(window, _) {
    window.shalomRepository = window.shalomRepository || {
      numz: {
        /**
         This function calculates the distnace between two points
         * @param {object} pointA
         * @param {object} pointB
         * @param {number} pointA.x
         * @param {number} pointA.y
         * @param {number} pointB.x
         * @param {number} pointB.y
         */
        getAngleDegrees(pointA, pointB){
          const
                distanceX = pointB.x - pointA.x,
                distanceY = pointB.y - pointA.y,
                radians = Math.atan2(distanceY, distanceX),
                degrees = radians * 180 / Math.PI;
          return degrees;
      },

     /** @param {number} degrees */ 
      degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
      },

      /**@param {number} radians */
      radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
      },

    },

      phyz: {

        /**
         This function calculates the distnace between two points
         * @param {object} pointA 
         * @param {object} pointB 
         * @returns {number}
         */
        getDistance(pointA, pointB) {
            const
            distanceX = pointB.x - pointA.x, 
            distanceY = point.y - point.y, 
            distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            return distance;
        },
      },
    };
  }(window, window._));