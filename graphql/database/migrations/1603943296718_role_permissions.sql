CREATE TABLE IF NOT EXISTS {}.roles_permissions(
   role_id INT(12) NOT NULL,
   permission_id INT(12) NOT NULL,
   UNIQUE KEY(role_id, permission_id)
   CONSTRAINT fk_rprole FOREIGN KEY(role_id)
   REFERENCES roles(id),
   ON DELETE CASCADE CASCADE,
   ON UPDATE CASCADE CASCADE
   CONSTRAINT fk_rpermission FOREIGN KEY(permission_id)
   REFERENCES permissions(id),
   ON DELETE CASCADE CASCADE,
   ON UPDATE CASCADE CASCADE
)