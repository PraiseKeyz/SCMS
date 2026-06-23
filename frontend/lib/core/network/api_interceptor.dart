import 'package:dio/dio.dart';

class ApiInterceptor extends Interceptor {
  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    if (response.data is Map<String, dynamic>) {
      final success = response.data['success'];
      if (success == true) {
        // Strip the envelope and pass only the data payload down
        response.data = response.data['data'];
        return handler.next(response);
      } else if (success == false) {
        // Build a comprehensive error from the envelope
        final errorObj = response.data['error'];
        final message = response.data['message'] ?? 'An error occurred';
        final detailedMessage = errorObj != null && errorObj['details'] != null
            ? errorObj['details']
            : message;

        return handler.reject(
          DioException(
            requestOptions: response.requestOptions,
            response: response,
            type: DioExceptionType.badResponse,
            error: detailedMessage,
            message: detailedMessage,
          ),
        );
      }
    }
    
    // If it's not the standard envelope, just pass it through
    handler.next(response);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) {
    // If we have a response and it's our standard envelope, extract the message
    if (err.response?.data is Map<String, dynamic>) {
      final success = err.response!.data['success'];
      if (success == false) {
        final errorObj = err.response!.data['error'];
        final message = err.response!.data['message'] ?? 'An error occurred';
        final detailedMessage = errorObj != null && errorObj['details'] != null
            ? errorObj['details']
            : message;
            
        final newErr = err.copyWith(
          message: detailedMessage,
          error: detailedMessage,
        );
        return handler.next(newErr);
      }
    }
    
    handler.next(err);
  }
}
