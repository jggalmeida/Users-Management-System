INSERT INTO [dbo].[users]
(
    [UserId],
    [Password],
    [Email],
    [Name],
    [Department],
    [EnteredOn],
    [LastUpdate],
    [SecurityLevel]
)
VALUES
(
    @UserId,
    @Password,
    @Email,
    @Name,
    @Department,
    @EnteredOn,
    @LastUpdate,
    @SecurityLevel
)

SELECT SCOPE_IDENTITY() as Id;