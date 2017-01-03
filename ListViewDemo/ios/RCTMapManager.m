//
//  RCTMapManager.m
//  ListViewDemo
//
//  Created by lingzhi on 2016/12/25.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTMapManager.h"
#import "RCTConvert.h"
#import "RCTConvert+MapKit.h"
#import "RCTMap.h"
#import "RCTComponent.h"
#import "UIView+React.h"


@interface RCTViewManager ()<MKMapViewDelegate>

@end

@implementation RCTMapManager

RCT_EXPORT_MODULE()

/*
 
//提供属性 供Javascript使用
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

//添加一个更复杂些的region属性
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RCTMap)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}
- (UIView *)view{
  
  //返回高德地图
  
  
  return [[MKMapView alloc] init];
  
}

*/



RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RCTMap)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

//提供属性 供Javascript使用
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

- (UIView *)view
{
  RCTMap *map = [RCTMap new];
 
  //设置是否可以缩放   默认YES
  map.zoomEnabled=YES;
  //设置是否可以拖动   默认YES
  map.scrollEnabled=YES;
  
  //设置是否可以旋转
  map.rotateEnabled=NO;

  map.delegate = self;
  return map;
}


#pragma mark- MKMapViewDelegate

- (void)mapViewDidFinishLoadingMap:(RCTMap *)mapView
{
  CLLocationCoordinate2D center = {mapView.region.center.latitude, mapView.region.center.longitude};
  
  MKCoordinateSpan span;
  span.latitudeDelta = mapView.region.span.latitudeDelta;
  span.longitudeDelta = mapView.region.span.longitudeDelta;
  
  MKCoordinateRegion region = {center, span};
  
  
  [mapView setRegion:region animated:1];
  
  MKPointAnnotation *ann = [[MKPointAnnotation alloc] init];
  ann.title = @"舜天产业园";
  ann.subtitle = @"云中央电子商务有限公司";
  ann.coordinate = center;
  
  [mapView addAnnotation:ann];

}

- (void)mapView:(RCTMap *)mapView regionDidChangeAnimated:(BOOL)animated
{
  if (!mapView.onChange){
    return;
  }
  MKCoordinateRegion region = mapView.region;
  mapView.onChange(@{ @"region": @{
                          @"latitude": @(region.center.latitude),
                          @"longitude": @(region.center.longitude),
                          @"latitudeDelta": @(region.span.latitudeDelta),
                          @"longitudeDelta": @(region.span.longitudeDelta),
                          }
                      });

}


@end
