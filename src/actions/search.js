import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  return (dispatch) => {

	var options = {};
	options.query = q;
	options.key = YOUTUBE_API_KEY;
	
	searchYouTube(options, data => {

		// DOUBLE CHECK WHY THIS WORKS !
		dispatch(changeVideoList(data));
		dispatch(changeVideo(data[0]));

	});	  
	  
  };
 
};

export default handleVideoSearch;
