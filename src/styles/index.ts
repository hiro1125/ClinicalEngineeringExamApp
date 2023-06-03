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
  SIZE15PX: RFPercentage(1.9),
  SIZE18PX: RFPercentage(2.1),
  SIZE19PX: RFPercentage(2.3),
  SIZE20PX: RFPercentage(2.6),
  SIZE24PX: RFPercentage(3.0),
  SIZE32PX: RFPercentage(4.0),
};
