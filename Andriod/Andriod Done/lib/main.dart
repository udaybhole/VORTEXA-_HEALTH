import 'package:flutter/material.dart';
import 'firstpg.dart';
import 'chatbot.dart';

void main() {
  runApp(MaterialApp(
      initialRoute: 'home',
      routes: {'home': (context) => HomePage()}
  ));
}

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
      children: [
        Container(
          decoration: BoxDecoration(
          image:DecorationImage(
              image: AssetImage('asset/homepg.jpg'),

          ),
      ),
    ),
    Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
    Padding(
    padding: const EdgeInsets.only(bottom: 50.0, left: 500.0, top: 20.0),
    child: ElevatedButton(
    onPressed: () {
      Navigator.push(context, MaterialPageRoute(builder:(context)=> FirstPage()));
    // Define what happens when the button is pressed
    print('Next button pressed');
    },
    style: ElevatedButton.styleFrom(
    padding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
    shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(30.0),
    ),
    ),
    child: Text(
    'Next',
    style: TextStyle(fontSize: 15),
    ),
    ),
    ),
    ],
    ),
  ],



    ),
    );


  }
}