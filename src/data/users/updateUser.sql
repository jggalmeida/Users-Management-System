UPDATE [dbo].[users]
SET [Password] = @Password,
    [Email] = @Email,
    [Name] = @Name,
    [Department] = @Department,
    [LastUpdate] = @LastUpdate
WHERE   [Id] = @Id;

SELECT [Id],
        [UserId],
        [Email],
        [Name],
        [Department],
        [EnteredOn],
        [LastUpdate],
        [SecurityLevel]
FROM [dbo].[users]
WHERE [Id] = @Id;