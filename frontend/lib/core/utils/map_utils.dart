import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MapUtils {
  /// Converts a Flutter IconData into a PNG byte array, suitable for use with Mapbox PointAnnotations.
  static Future<Uint8List> getBytesFromIcon(IconData icon, Color color, int size) async {
    final pictureRecorder = ui.PictureRecorder();
    final canvas = Canvas(pictureRecorder);
    final textPainter = TextPainter(textDirection: TextDirection.ltr);
    
    // Convert codePoint to String
    final iconStr = String.fromCharCode(icon.codePoint);

    textPainter.text = TextSpan(
      text: iconStr,
      style: TextStyle(
        letterSpacing: 0.0,
        fontSize: size.toDouble(),
        fontFamily: icon.fontFamily,
        package: icon.fontPackage,
        color: color,
      ),
    );
    textPainter.layout();
    textPainter.paint(canvas, const Offset(0.0, 0.0));
    
    final picture = pictureRecorder.endRecording();
    final image = await picture.toImage(size, size);
    final byteData = await image.toByteData(format: ui.ImageByteFormat.png);
    return byteData!.buffer.asUint8List();
  }

  /// Draws a custom circle icon with initials or text
  static Future<Uint8List> getBytesFromInitials(String text, Color backgroundColor, int size) async {
    final pictureRecorder = ui.PictureRecorder();
    final canvas = Canvas(pictureRecorder);
    
    // Draw background circle
    final paint = Paint()..color = backgroundColor;
    canvas.drawCircle(Offset(size / 2, size / 2), size / 2, paint);
    
    // Draw border
    final borderPaint = Paint()
      ..color = Colors.white
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2;
    canvas.drawCircle(Offset(size / 2, size / 2), size / 2, borderPaint);

    // Draw text
    final textPainter = TextPainter(textDirection: TextDirection.ltr);
    textPainter.text = TextSpan(
      text: text,
      style: TextStyle(
        fontSize: size * 0.4,
        color: Colors.white,
        fontWeight: FontWeight.bold,
      ),
    );
    textPainter.layout();
    textPainter.paint(
      canvas, 
      Offset((size - textPainter.width) / 2, (size - textPainter.height) / 2)
    );
    
    final picture = pictureRecorder.endRecording();
    final image = await picture.toImage(size, size);
    final byteData = await image.toByteData(format: ui.ImageByteFormat.png);
    return byteData!.buffer.asUint8List();
  }
}
