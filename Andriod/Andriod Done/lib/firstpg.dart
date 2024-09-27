import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class FirstPage extends StatefulWidget {
  const FirstPage({Key? key}) : super(key: key);

  @override
  _FirstPageState createState() => _FirstPageState();
}

class _FirstPageState extends State<FirstPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('asset/first.jpg'),
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  _buildRoundedButton('Lung Cancer', 'https://lungs.onrender.com'),

                ],
              ),

            ],
          ),
        ),
      ),
    );
  }

  // A reusable button builder function that accepts the button text and URL
  Widget _buildRoundedButton(String text, String url) {
    return Container(
      width: 200, // Fixed width
      height: 200, // Fixed height
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30), // Rounded corners
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5), // Shadow color
            spreadRadius: 5, // Spread radius
            blurRadius: 7, // Blur radius
            offset: Offset(0, 3), // Shadow position
          ),
        ],
      ),
      child: TextButton(
        onPressed: () => _launchURL(url), // Pass the specific URL
        child: Text(
          text,
          style: TextStyle(
            color: Colors.indigo,
            fontSize: 12.5,
            fontWeight: FontWeight.bold,
          ), // Button text color
        ),
      ),
    );
  }

  // Function to launch the provided URL
  Future<void> _launchURL(String urlString) async {
    final Uri url = Uri.parse(urlString);
    if (!await launchUrl(url)) {
      throw 'Could not launch $urlString';
    }
  }
}

