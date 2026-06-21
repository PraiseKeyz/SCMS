enum Role {
  warden,
  admin,
}

class SafeUser {
  final String id;
  final String name;
  final String email;
  final Role role;
  final DateTime createdAt;

  SafeUser({
    required this.id,
    required this.name,
    required this.email,
    required this.role,
    required this.createdAt,
  });

  factory SafeUser.fromJson(Map<String, dynamic> json) {
    return SafeUser(
      id: json['id'],
      name: json['name'],
      email: json['email'],
      role: json['role'] == 'ADMIN' ? Role.admin : Role.warden,
      createdAt: DateTime.parse(json['createdAt']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'role': role == Role.admin ? 'ADMIN' : 'WARDEN',
      'createdAt': createdAt.toIso8601String(),
    };
  }
}
