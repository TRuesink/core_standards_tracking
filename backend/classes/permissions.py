from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        print(obj.teachers)
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user in obj.teachers.all() or request.user.is_superuser