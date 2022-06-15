import { adjustments, annotation, archive, cube } from "@luk3d/flut-hero";
import {
  RelativeUnits,
  AbsoluteUnits,
  Expanded,
  Padding,
  Column,
  Container,
  Text,
  Colors,
  EdgeInsets,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  BoxDecoration,
  Row,
  Radius,
  Spacer,
} from "@luk3d/flutjs/dist/index.js";
import { BorderRadius } from "@luk3d/flutjs/dist/painting/index.js";
import { Alignment, AlignmentGeometry } from "@luk3d/flutjs/dist/painting/alignment.js";
import { BoxFit } from "@luk3d/flutjs/dist/painting/boxFit.js";
import { BoxShadow } from "@luk3d/flutjs/dist/painting/boxShadow.js";
import { FontWeight } from "@luk3d/flutjs/dist/ui/text.js";
import { Offset } from "@luk3d/flutjs/dist/utils/offset.js";
import { Image, _Image } from "@luk3d/flutjs/dist/widgets/index.js";
import {
  Scaffold,
  WindiApp,
  AppBar,
} from "@luk3d/flutjs/dist/windiapp/index.js";

/**Basic Flutjs App With Tailwind */

WindiApp({
  title: "Flutjs test",

  home: Scaffold({
    body: Container({
      height: 100,
      decoration: BoxDecoration({
        color: Colors.White,
      }),
      padding:EdgeInsets.all(10),
      child: Column({
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container({
            width: 100,
            height: 48,
            widthSizeMeasurementUnit: RelativeUnits["%"],
            heightSizeMeasurementUnit: AbsoluteUnits.pixels,
            
            child: Expanded({
              child: Row({
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  adjustments({color:Colors.Gray[600]}),
                  Text("Crowder"),
                  archive({color:Colors.Gray[600]})


                ],
              }),
            }),
          }),

          Container({
            width:95,
            widthSizeMeasurementUnit:RelativeUnits["%"],
            padding:EdgeInsets.all(10),
            margin:EdgeInsets.only({top:10}),
            decoration:BoxDecoration({
              color:Colors.Cyan[500],
              borderRadius:BorderRadius.all(Radius.circular(5))
            }),
            child:Row({
              crossAxisAlignment:CrossAxisAlignment.center,
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              children:[
                Row({
                  crossAxisAlignment:CrossAxisAlignment.center,
                  children:[
                  Container({
                    margin:EdgeInsets.only({right:10}),
                    decoration:BoxDecoration({
                      color:Colors.White,
                      borderRadius:BorderRadius.all(Radius.circular(5))
                    }),
                    child:annotation({ color:Colors.Cyan[500]}),
                  }),
                  Column({
                    children:[
                      Text("Goodness Wallet",{textStyle:TextStyle({color:Colors.Gray[200]})}),
                      Text("$ 2.500,00",{textStyle:TextStyle({color:Colors.White, fontWeight:FontWeight.w600})}),
                    ]
                  }),
                ]}),

                Container({
                  padding:EdgeInsets.symmetric({vertical:10, horizontal:5}),
                  decoration:BoxDecoration({
                    color:Colors.White,
                    borderRadius:BorderRadius.all(Radius.circular(5))
                  }),
                  child:Text("Top Up",{}),
                }),
                
              ]
            })
          }),

          Container({
            width:95,
            padding:EdgeInsets.all(10),
            margin:EdgeInsets.only({top:30, bottom:30}),
            decoration:BoxDecoration({
              color:Colors.Gray[200],
            }),
            child:Row({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.center,
              children:[
                Text("Find category or enter name...",{textStyle:TextStyle({color:Colors.Gray[400]})}),
                cube({ color:Colors.Gray[600]})
              ]
            })
          }),
          Container({
            width:100,
            margin:EdgeInsets.only({bottom:10}),
            child:Row({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.center,
              children:[
            Text("Last Campaigns",{textStyle:TextStyle({color:Colors.Gray[700], fontSize:20, fontWeight:FontWeight.w700})}),
            Text("See All",{textStyle:TextStyle({color:Colors.Cyan[500], fontWeight:FontWeight.w600})}),
  
              ]
            })
          }),

          ...["https://picsum.photos/200/300", "https://picsum.photos/200/300","https://picsum.photos/200/300"].map(function(image){
            return Container({
              width:100,
              margin:EdgeInsets.only({top:20}),
              padding:EdgeInsets.all(20),
              decoration:BoxDecoration({
                borderRadius:BorderRadius.all(Radius.circular(5)),
                boxShadow:[
                  new BoxShadow({
                    color:Colors.Gray[300],
                    spreadRadius:5,
                    blurRadius:20,
                    offset:Offset(0,10)
                  })
                ]
              }),
              child:Column({
                children:[
                  Container({
                    width:90,
                    height:200,
                    heightSizeMeasurementUnit:AbsoluteUnits.pixels,
                    margin:EdgeInsets.only({right:10, bottom:10}),
  
                    child:Image().network(image,{
                      fit:BoxFit.cover,
                      alignment:new AlignmentGeometry({x:0,y:0})
                    })
                  }),
  
                  Text("Humanity for Angola",{textStyle:TextStyle({color:Colors.Gray[700], fontSize:13, fontWeight:FontWeight.w700})}),
                 Container({
                  width:90,
                  child:Row({
                    children:[
                      Container({
                        margin:EdgeInsets.only({top:10, bottom:10}),
                        width:100,
                        height:5,
                        heightSizeMeasurementUnit:AbsoluteUnits.pixels,
                        decoration:BoxDecoration({
                          color:Colors.Gray[100]
                        }),
                        child:Container({
                          width:85,
                          height:5,
                          heightSizeMeasurementUnit:AbsoluteUnits.pixels,
                          decoration:BoxDecoration({
                            color:Colors.Cyan[500]
                          })
                        })
                      }),
                 Text("85%",{textStyle:TextStyle({color:Colors.Gray[400], fontSize:13, fontWeight:FontWeight.w500})}),
  
                    ]
                   })
                 }),
                 Text("$ 2.54.500/3.200.000",{textStyle:TextStyle({color:Colors.Gray[700], fontSize:13, fontWeight:FontWeight.w700})}),
  
                ]
              })
              
            });
          })
        ],
      }),
    }),
  }),
});
