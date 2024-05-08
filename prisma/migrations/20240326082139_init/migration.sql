-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_policy" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "policy" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "role_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_permission" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "role_permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policy_permission" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "policy_permission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "role_permission_type_key" ON "role_permission"("type");

-- CreateIndex
CREATE UNIQUE INDEX "policy_permission_code_key" ON "policy_permission"("code");
