import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const color = ['#a7ddff', '#2d82a8'];

export const SIZE = {
  BASIC_HIGHT: hp('1%'),
  BASIC_WIDTH: wp('1%'),
};

export const FONTSIZE = {
  SIZE14PX: RFPercentage(1.9),
  SIZE15PX: RFPercentage(2.0),
  SIZE16PX: RFPercentage(2.2),
  SIZE17PX: RFPercentage(2.3),
  SIZE18PX: RFPercentage(2.4),
  SIZE19PX: RFPercentage(2.5),
  SIZE20PX: RFPercentage(2.6),
  SIZE24PX: RFPercentage(3.0),
  SIZE25PX: RFPercentage(3.5),
  SIZE32PX: RFPercentage(4.2),
};

export const COMMON_BUTTON_STYLE = {
  paddingVertical: 15,
  paddingHorizontal: 35,
  borderRadius: 10,
  marginTop: SIZE.BASIC_HIGHT * 2,
};
